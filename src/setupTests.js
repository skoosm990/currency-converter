import '@testing-library/jest-dom'
const { getByRole } = render(<Button onClick={handleClick}>Click Me</Button>);
fireEvent.click(getByRole('button'));
expect(handleClick).toHaveBeenCalled();
expect(getByRole('button')).toHaveTextContent('Clicked');
