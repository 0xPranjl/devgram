import { Client, Account } from 'appwrite';

const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("657432ea69ade7c713ee")

export const account = new Account(client);