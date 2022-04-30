export default async () => {
  const user = await fetch('https://randomuser.me/api/');
  const result = await user.json();

  return result.results[0];
}