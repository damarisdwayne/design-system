import { Box, Typography } from '@damaris-ui/core'
import React from 'react'

const DialogPlaceholder: React.FC = () => {
  return (
    <Box minimal fullWidth alignItems="center">
      <Box
        minimal
        alignItems="flex-start"
        justifyContent="flex-start"
        customStyles={{ width: 500 }}
        noPadding
      >
        <Typography variant="heading" as="h6" gutterVertical="16px">
          Per 31.01.2043 Pensionierung 100%
        </Typography>
      </Box>
    </Box>
  )
}

export default DialogPlaceholder
