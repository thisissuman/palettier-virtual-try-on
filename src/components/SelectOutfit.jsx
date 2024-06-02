import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectOutfit() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="pl-10 w-1/4">
      <Box sx={{ minWidth: 140 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select an Outfit</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Lehenga Set</MenuItem>
            <MenuItem value={20}>Kurta Set</MenuItem>
            
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
