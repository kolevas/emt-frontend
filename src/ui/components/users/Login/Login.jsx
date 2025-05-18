import { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import  {useAuth} from "../../../../context/AuthContext";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();

    const handleLogin = () => login(username, password);

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70vh", backgroundColor: "#f0f0f0" }}>
            <Paper sx={{ padding: 4, width: 400, boxShadow: 2 }}>
                <Typography variant="h5" mb={2} textAlign="center">Login</Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <TextField
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        fullWidth
                    />
                    <TextField
                        type="password"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                    />
                    <Button variant="contained" onClick={handleLogin} fullWidth>Login</Button>
                </Box>
            </Paper>
        </Box>
    );
};

export default Login;
