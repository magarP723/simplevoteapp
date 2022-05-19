form.addEventListener("submit", async () => {
  const login = {
    email: exampleInputEmail1.value,
    password: exampleInputPassword1.value,
  };
  await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(login),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "error") {
        alert(data.error);
      } else {
        // localStorage.setItem("isAuth", "true");
        fetch("/auth", {
          method: "POST",
          body: JSON.stringify({ token: "apple" }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.isAuth) {
              location.href = "/xyzopert";
            } else {
              location.href = "/";
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
