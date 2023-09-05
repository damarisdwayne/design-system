import { Paper } from '@damaris-ui/core'
import React from 'react'

const DialogPlaceholder: React.FC = () => {
  return (
    <Paper minimal fullWidth alignItems="center">
      <Paper
        minimal
        alignItems="flex-start"
        justifyContent="flex-start"
        customStyles={{ width: 500 }}
      >
        <p>Per 31.01.2043 Pensionierung 100%</p>
      </Paper>
    </Paper>
  )
}

export default DialogPlaceholder
