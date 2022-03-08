/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { AuthProvider } from "ra-core";
import { REST_API } from "./constants/endpoints";
import InfoStorage from "./utils/InfoStorage";
import { AvatarGenerator } from "random-avatar-generator";

const authProvider: AuthProvider = {
  login: async ({
    username,
    password,
    deviceId,
    captchaCode,
  }: {
    username?: string;
    password?: string;
    deviceId?: string;
    captchaCode?: string;
  }): Promise<any> => {
    const response = await axios.post(`${REST_API}/auth/login`, {
      idKey: username,
      captchaCode,
      deviceId,
      password,
    });
    const { data } = response;

    if (!data.token) {
      throw new Error(data.reason);
    }
    if (data.success) {
      InfoStorage.setItem("token", data.token);
    }
  },
  register: (registerType: string) => {
    return axios.post(`${REST_API}/auth/register`, {
      registerType,
    });
  },

  logout: async () => {
    try {
      const deviceId = InfoStorage.getItem("deviceId");
      if (deviceId) {
        await axios.delete(`${REST_API}/sessions/${deviceId}`);
      }
    } catch (e) {
      console.error(e);
    } finally {
      InfoStorage.removeItem("token");
    }
  },

  checkError: () => {
    return Promise.resolve();
  },

  checkAuth: () => {
    console.log("checkAuth=========");

    console.log(InfoStorage.getItem("token"));

    return new Promise((res, rej) => {
      return InfoStorage.getItem("token") ? res() : rej();
    });
  },

  getPermissions: () => {
    return Promise.resolve(true);
  },

  getIdentity: async (): Promise<any> => {
    const generator = new AvatarGenerator();
    return {
      id: "xxx",
      fullName: "username",
      avatar: generator.generateRandomAvatar(),
    };
  },

  getLoginSMS: async (phone: string): Promise<any> => {
    return axios.post(`${REST_API}/sms`, {
      phone,
    });
  },
};

export default authProvider;
