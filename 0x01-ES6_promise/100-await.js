import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser() {
  let photouser = {};

  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    photouser = { photo, user };
    return { photo, user };
  } catch (error) {
    photouser = {photo: null, user: null};
  }
  return photouser;
}
