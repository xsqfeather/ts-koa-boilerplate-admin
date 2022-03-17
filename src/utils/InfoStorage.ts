// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fakerStorage = {} as unknown as any;
const InfoStorage = {
  setItem: (key: string, value: string): void => {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      console.error(error);

      fakerStorage[key] = value;
    }
  },
  getItem: (key: string): string | null => {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      console.error(error);
      return fakerStorage[key];
    }
  },
  removeItem: (key: string): void => {
    try {
      return window.localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
      return (fakerStorage[key] = undefined);
    }
  },
};

export default InfoStorage;
