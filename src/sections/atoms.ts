import { atom } from "recoil";
import {
  DataState,
  User,
  CopyInput,
  homeViewTypes,
  Insight,
  FormFieldsValidation,
  IsFormFieldErrorVisible,
  FormValidMessage,
  OptIn,
} from "./types";

export const homeView = atom({
  key: "viewState",
  default: homeViewTypes.isFirstSubmit,
});

export const data = atom<DataState>({
  key: "data",
  default: {
    data: null,
  },
});

export const user = atom<User>({
  key: "user",
  default: {
    first_name: "",
    last_name: "",
    work_email: "",
    business_industry: "SAAS AND TECHNOLOGY",
    business_size: "",
    company_name: "",
    opt_in: false,
  },
});

export const optIn = atom<OptIn>({
  key: "optIn",
  default: {
    yes: false,
    no: false,
    termsAndConditions: false,
  },
});

export const formFieldsValidation = atom<FormFieldsValidation>({
  key: "formFieldsValidation",
  default: {
    firstNameError: true,
    lastNameError: true,
    workEmailError: true,
    companyNameError: true,
    copyError: true,
    optInError: true,
    termsError: true,
  },
});

export const isFormFieldErrorVisible = atom<IsFormFieldErrorVisible>({
  key: "isFormFieldErrorVisible",
  default: {
    firstNameError: false,
    lastNameError: false,
    workEmailError: false,
    companyNameError: false,
    copyError: false,
    optInError: false,
    formValidError: false,
  },
});

export const formValidMessage = atom<FormValidMessage>({
  key: "formValidMessage",
  default: {
    firstNameMsg: "",
    lastNameMsg: "",
    workEmailMsg: "",
    companyNameMsg: "",
    copyMsg: "",
  },
});

export const copy = atom<CopyInput>({
  key: "copy",
  default: {
    level: 2,
    text: "",
    token_ind: [],
    token_ind_replaced_words: [],
    copiedSuccess: false,
  },
});

export const insight = atom<Insight>({
  key: "insight",
  default: {
    like: false,
    dislike: false,
  },
});
