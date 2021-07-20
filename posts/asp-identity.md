---
title: 'ASP.NET Core Identity User Locked out'
gist: 'How I lock out user profiles that are brute-forcing passwords'
date: 'Jun 24, 2021'
---



The user lockout feature is the way to improve application security by locking out a user that enters a password incorrectly several times. This technique can help us in protecting against brute force attacks, where an attacker repeatedly tries to guess a password. ⛳ 

Quite a basic feature for an authentication service, but adding it in my Web API app was quite a head scratcher.

#### 1. Adding to configuration service

In your startup.cs or container configuration file,   the config for locking out can be  set.


```
services.AddIdentity<User, IdentityRole>(opt =>
{
    // previous code removed for clarity reasons
    opt.Lockout.AllowedForNewUsers = true;
    opt.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(2);
    opt.Lockout.MaxFailedAccessAttempts = 3;
})
```
The property names are self explanatory here.

The  above code will  by default setup locking out feature and if a person is trying to login with wrong `password` for a given `username` the user account will be locked out for 5 minutes updated accordingly in `LockoutEnd` column 

#### 2. How to check if this user is Locked Out?

```
//  AuthService.cs
..
    var result = await signInManager.CheckPasswordSignInAsync(user, model.Password, lockoutOnFailure: true);
..
```
The properties  of `result : SignInResult` we are concerned here are `Succeeded`, `IsLockedOut`.

✅ `Succeeded ==  true` if the username and password **match**

❌ `Succeeded == false` if the username and password **do not match**

✅ `IsLockedOut == true` if this user has been locked out after x number of trials

#### 3. 🤔 What is here to scratch your hear for

I was expecting `LockOutEnabled` will become `true (1)` in the identity user table. It took me few hours to get to the documentation but it was stated clearly in the Library class.

```
// Microsoft.AspNetCore.Identity.IdentityUser
      
// Gets or sets a flag indicating if the user could be locked out.

public virtual bool LockoutEnabled { get; set; }
```

I missed the **could be**  and  it costed me some hours.😪

Updating this column to `true` for necessary users then locks out the user for particular a time limit set in the `config`

The proper logging and an error can be thrown with 
`result.IsLockedOut` flag from the service layer 😅

📚 References
1. Using  [UserManager.CheckPasswordAsync versus SignInManager.PasswordSignInAsync](https://stackoverflow.com/questions/53854051/usermanager-checkpasswordasync-vs-signinmanager-passwordsigninasync
)

2. [User Lockout with ASP.NET Core Identity](https://code-maze.com/user-lockout-aspnet-core-identity/)