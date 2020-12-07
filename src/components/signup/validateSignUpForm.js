export default function validateSignUpForm(values) {
  const errors = {};

  const emailRegex = /\S+@\S+\.\S+/;
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}/;

  if (!values.username.trim()) {
    errors.username = '닉네임을 설정하지 않았습니다.';
  }

  if (!values.email) {
    errors.email = '이메일을 입력하지 않았습니다.';
  } else if (!emailRegex.test(values.email)) {
    errors.email = '이메일주소 형식 틀림.';
  }

  if (!values.password) {
    errors.password = '비밀번호를 입력하지 않았습니다.';
  } else if (!passwordRegex.test(values.password)) {
    errors.password =
      '비밀번호는 최소 8자, 문자, 숫자, 특수문자의 조합이어야 합니다. ';
  }

  if (!values.password2) {
    errors.password2 = '비밀번호를 확인하지 않았습니다.';
  } else if (values.password2 !== values.password) {
    errors.password2 = '바말번호가 일치하지 않습니다.';
  }

  return errors;
}
