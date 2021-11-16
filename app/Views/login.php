<?= $this->extend('templates/auth') ?>

<?= $this->section('content') ?>

<div class="wrapper">
  <header>
    <h1>Login Form</h1>
  </header>
  <form class="login">
    <div class="field email">
      <div class="input-area">
        <input type="text" name="email" placeholder="Email Address">
        <i class="icon fas fa-envelope"></i>
        <i class="error error-icon fas fa-exclamation-circle"></i>
      </div>
      <div class="error error-txt">Email can't be blank</div>
    </div>
    <div class="field password">
      <div class="input-area">
        <input type="password" name="password" placeholder="Password">
        <i class="icon fas fa-lock"></i>
        <i class="eye-icon fas fa-eye"></i>
        <i class="error error-icon fas fa-exclamation-circle"></i>
      </div>
      <div class="error error-txt">Password can't be blank</div>
    </div>
    <div class="pass-txt"><a href="#">Forgot password?</a></div>
    <input type="submit" value="Login">
  </form>
  <div class="sign-txt">Not yet member? <a href="/register">Signup now</a></div>
</div>

<?= $this->endSection() ?>