const obj = {}

function doSomething () {
  return new Promise((resolve, reject) => {
    obj.create({
      name: 'Dylan',
      username: 'dylan',
      photo: 'avatarurl.com',
      email: 'dylan@myemail.com'
    },
    { url: window.location.href })
    .then(() => {})
  })
}

doSomething()
