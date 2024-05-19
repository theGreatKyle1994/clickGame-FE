/// <reference types="vite/client" />

interface AccountFormData {
  username: {
    value: string;
    errMsg: string;
  };
  email: {
    value: string;
    errMsg: string;
  };
  password: {
    value: string;
    errMsg: string;
  };
  cPassword: {
    value: string;
    errMsg: string;
  };
}

interface LoginRegistrationProps {
  formData: AccountFormData;
  formState: "login" | "register";
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface PlayerData {
  health: number;
  money: number;
  energy: number;
}

interface MissionData {
  gameID: string;
  title: string;
  cost: number;
}

interface MissionTileProps {
  data: MissionData;
}
