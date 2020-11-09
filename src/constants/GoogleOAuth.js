const { REACT_APP_CLIENT_ID, REACT_APP_REDIRECT_URI } = process.env;

const GOOGLE_OAUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?
scope=https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile&
access_type=offline&
include_granted_scopes=true&
state=state_parameter_passthrough_value&
redirect_uri=${REACT_APP_REDIRECT_URI}&
response_type=code&
client_id=${REACT_APP_CLIENT_ID}&
prompt=select_account
`;

export default GOOGLE_OAUTH_URL;
