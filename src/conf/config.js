const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_API_ID),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteTableId: String(import.meta.env.VITE_APPWRITE_TABLE_ID),
};

export default conf;
