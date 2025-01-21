<script>
  import EmailValidator from 'email-validator';

  // setup vars for email value and button text
  let email = '';
  let buttonText = 'Subscribe';

  // handle submit function
  const handleSubmit = async () => {
    // check to see if email has a value
    if (email.length === 0) {
      alert('Please enter an email address');
      return;
    }

    // check to see if email is valid
    if (!EmailValidator.validate(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // change button text
    buttonText = 'Sending...';

    // send request to our api route
    const res = await fetch('/api/subscribe-user', {
      body: JSON.stringify({
        email
      }),

      headers: {
        'Content-Type': 'application/json',
      },

      method: 'POST',
    })

    // get response
    const subscribeConfirm = await res.json()

    // check if successful or not
    if (subscribeConfirm.status === 'success') {
      buttonText = 'Subscribed!'
      email = ''

      setTimeout(() => {
        buttonText = 'Subscribe'
      }, 1200)
    } else {
      console.error(subscribeConfirm.data)

      alert('There was an error subscribing to the newsletter. Hit me up at mitchellcliftonbarton@gmail.com and I\'ll add you the old fashioned way :)')

      buttonText = 'Subscribe'
      email = ''
    }
  }
</script>

<form 
  on:submit|preventDefault={handleSubmit} 
  class="flex items-center"
>
  <input 
    type="text" 
    placeholder="Email Address" 
    class="border px-4 py-3 mr-4" 
    autocapitalize="off" 
    autocorrect="off" 
    bind:value={email}
  >

  <button type="submit" class="border-light-grey bg-light-purple lg:hover:bg-transparent lg:hover:border-black border px-4 py-3 rounded-2xl transition-colors duration-300">{buttonText}</button>
</form>

<style>
  input {
    color: var(--black);
    border-radius: none;
    transition: border-color .3s;
    box-shadow: none;
    outline: none;
    flex: 1;
    min-width: 175px;
  }

  input:focus {
    border-color: var(--black);
  }
</style>