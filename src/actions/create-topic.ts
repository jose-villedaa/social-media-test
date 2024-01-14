'use server';

export default async function createTopic(formData: FormData) {
  const name = formData.get('name');
  const description = formData.get('description');

  console.log(name, description);
}
