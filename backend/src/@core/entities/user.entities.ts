import { UserProps } from "../dtos/userDTO";

export class User {
  readonly id: Required<UserProps["id"]>;
  name: Required<UserProps["name"]>;
  username: Required<UserProps["username"]>;
  password: Required<UserProps["password"]>;

  private constructor(props: UserProps, id?: string) {
    this.id = props.id || id;

    if(!props) {
      this.name = null;
      this.username = null;
      this.password = null;
    }

    this.name = props.name;
    this.username = props.username;
    this.password = props.password;
  }

  static create(props: UserProps, id?: string): User {
    return new User(props, id);
  }
}