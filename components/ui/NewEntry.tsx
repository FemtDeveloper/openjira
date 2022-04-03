import { ChangeEvent, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

export const NewEntry = () => {
  const [isAdding, setIsAdding] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [touched, setTouched] = useState(false);

  const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const onSave = () => {
    if (inputValue.length === 0) return;
    console.log({ inputValue });
  };

  return (
    <>
      <Box marginBottom={2}>
        {isAdding ? (
          <>
            <TextField
              multiline
              label="Nueva tarea"
              autoFocus
              placeholder="Nueva Entrda"
              fullWidth
              sx={{ marginY: 2 }}
              helperText={
                inputValue.length <= 0 && touched && "Ingrese un valor"
              }
              error={inputValue.length <= 0 && touched}
              value={inputValue}
              onChange={onTextFieldChanged}
              onBlur={() => setTouched(true)}
            />
            <Box display="flex" justifyContent="space-between" paddingX={2}>
              <Button
                variant="outlined"
                color="error"
                onClick={() => setIsAdding(false)}
              >
                Cancelar
              </Button>
              <Button
                variant="outlined"
                startIcon={<SaveAltOutlinedIcon />}
                onClick={onSave}
              >
                Guardar
              </Button>
            </Box>
          </>
        ) : (
          <>
            <Button
              variant="contained"
              color="secondary"
              endIcon={<AddBoxOutlinedIcon />}
              fullWidth
              onClick={() => setIsAdding(true)}
            >
              Agregar Nueva tarea
            </Button>
          </>
        )}
      </Box>
    </>
  );
};
