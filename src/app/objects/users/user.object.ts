export interface UserObject {
  firstName: string;
  lastName: string;
  middleName: string;
  photoUrl: string;
  phoneNumber: string;
  gender: GenderObject;
  address: string;
  province: string;
  city: string;
  email: string;
  password: string;
  date: Date;
}

export interface UserCredentialObject {
  email: string;
  password: string;
}

enum GenderObject {
  MALE = 'male',
  FEMALE = 'female'
}
