export interface Contact {
  id?: number;
  name: string;
  phones: Phone[];
  emails: Email[];
  addresses: Address[];
}

export interface Phone {
  id?: number;
  phone_number: string;
}

export interface Email {
  id?: number;
  email: string;
}

export interface Address {
  id?: number;
  address: string;
  city: string;
  state: string;
  zip_code: string;
}
