import conf from "../../conf/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  //properties
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  //method to create account
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name,
      );

      if (userAccount) {
        //call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  //for login
  async login({ email, password }) {
    try {
      await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("AppWrite service :: Error", error);
    }

    return null;
  }

  async logout() {
    try {
      await this.account.deleteSession();
    } catch (error) {
      console.log(error);
    }
  }
}
const authService = new AuthService();
export default authService;
