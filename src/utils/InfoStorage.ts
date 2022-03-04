// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fakerStorage = {} as unknown as any;
const InfoStorage = {
  setItem: (key: string, value: string): void => {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.error(error);

      fakerStorage[key] = value;
    }
  },
  getItem: (key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.error(error);
      return fakerStorage[key];
    }
  },
  removeItem: (key: string): void => {
    try {
      return localStorage.removeItem(key);
    } catch (error) {
      console.error(error);
      return (fakerStorage[key] = undefined);
    }
  },
};

export default InfoStorage;
