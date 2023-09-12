import React from 'react'
import { colors } from '@damaris-ui/theme'
import { IconProps } from './types'

export const SpinnerIcon = React.forwardRef<SVGSVGElement, IconProps>(
  (props, ref) => {
    const { color = colors.grayScale[200], width = 72, height = 72 } = props

    return (
      <svg
        {...{ width, height, ref }}
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M68 36C68 53.6731 53.6731 68 36 68C18.3269 68 4 53.6731 4 36C4 18.3269 18.3269 4 36 4C53.6731 4 68 18.3269 68 36Z"
          stroke={color}
          strokeWidth="8"
        />
        <path
          d="M36 4C53.6731 4 68 18.3269 68 36"
          stroke="url(#paint0_linear_4912_19414)"
          strokeWidth="8"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 36 36"
            to="360 36 36"
            dur="0.8s"
            repeatCount="indefinite"
          />
        </path>
        <defs>
          <linearGradient
            id="paint0_linear_4912_19414"
            x1="68"
            y1="20"
            x2="36"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6BB5CE" />
            <stop offset="1" stopColor="#B0D7E5" />
          </linearGradient>
        </defs>
      </svg>
    )
  },
)
SpinnerIcon.displayName = 'SpinnerIcon'
export default SpinnerIcon
