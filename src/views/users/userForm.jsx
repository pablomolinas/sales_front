import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { styles } from "./styles";

const UserForm = ({currentUser, handleChange}) => (
  
  <Box sx={styles.inputFields}>
      <TextField 
            placeholder="Nombre" 
            name="name"
            label="Nombre"
            required
            value={currentUser.name}              
            autoFocus
            onChange={(e) => handleChange(e.target)}
      />

      <TextField 
            placeholder="Email" 
            name="email"
            label="Email"
            required
            value={currentUser.email}
            onChange={(e) => handleChange(e.target)}
      />

      <TextField 
            placeholder="Password" 
            name="password"
            label="Password"
            type='password'
            required
            value={currentUser.password}
            onChange={(e) => handleChange(e.target)}
      />

  </Box>
);

export default UserForm;