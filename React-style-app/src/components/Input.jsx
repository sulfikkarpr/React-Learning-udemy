
import { styled } from 'styled-components'

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ $invalid }) => $invalid ? '#f8717' : '#6b7280'};

`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  ${({ $invalid }) => $invalid ?
        `
    color: #ef4444;
    border-color: #f73f3f;
    background-color: #fed2d2;`
        :
        `
    background-color: #d1d5db;
    color: #374151;`

    }

`

export const Button = styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border-radius: 6px;
  border: none;

  &:hover {
   background-color: #f0920e
  }

`



export const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`



export default function CustomInput({ label, invalid, ...props }) {
    return (
        <p>
            <Label $invalid={invalid} > {label} </Label>
            <Input $invalid={invalid} {...props} />
        </p>
    )

}