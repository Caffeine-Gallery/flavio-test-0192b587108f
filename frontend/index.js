import { backend } from 'declarations/backend';

document.addEventListener('DOMContentLoaded', async () => {
  const greetingElement = document.getElementById('greeting');
  const newGreetingInput = document.getElementById('newGreeting');
  const updateGreetingButton = document.getElementById('updateGreeting');

  async function updateGreeting() {
    const currentGreeting = await backend.getGreeting();
    greetingElement.textContent = currentGreeting;
  }

  updateGreetingButton.addEventListener('click', async () => {
    const newGreeting = newGreetingInput.value;
    await backend.setGreeting(newGreeting);
    await updateGreeting();
    newGreetingInput.value = '';
  });

  await updateGreeting();
});
