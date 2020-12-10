export interface DataState {
  data: Suggestions | null;
}

export interface Response {
  status: string;
  output_json: Suggestions;
}

export interface Suggestions {
  level: number;
  origin_cr_pred: string;
  tokens: string[];
  token_ind: number[];
  word_suggestions: WordSuggestions[];
  word_replacements?: string[];
  new_cr_pred: string;
  new_text: string;
  recon_text: string;
}

export interface WordSuggestions {
  token_ind: number;
  suggestions: string[];
}

export interface User {
  first_name: string;
  last_name: string;
  work_email: string;
  company_name: string;
  business_industry: string;
  business_size: string;
  opt_in: boolean;
}

export interface OptIn {
  yes: boolean;
  no: boolean;
  termsAndConditions: boolean;
}

export interface FormFieldsValidation {
  firstNameError: boolean;
  lastNameError: boolean;
  workEmailError: boolean;
  companyNameError: boolean;
  copyError: boolean;
  optInError: boolean;
  termsError: boolean;
}

export interface IsFormFieldErrorVisible {
  firstNameError: boolean;
  lastNameError: boolean;
  workEmailError: boolean;
  companyNameError: boolean;
  copyError: boolean;
  optInError: boolean;
  formValidError: boolean;
}

export interface FormValidMessage {
  firstNameMsg: string;
  lastNameMsg: string;
  workEmailMsg: string;
  companyNameMsg: string;
  copyMsg: string;
}

export interface ReqBody {
  user: User;
  level: number;
  copy: string;
}

export interface CopyInput {
  level: number;
  text: string;
  token_ind: number[];
  token_ind_replaced_words: number[];
  copiedSuccess: boolean;
}

export enum homeViewTypes {
  isFirstSubmit = "IS_FIRST_SUBMIT",
  isRetry = "IS_RETRY",
  results = "RESULTS",
  loading = "LOADING",
  error = "ERROR",
}

export interface Insight {
  like: boolean;
  dislike: boolean;
}
