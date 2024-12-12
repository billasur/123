import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from '../src/components/Carousel.jsx';
import { images } from '../src/data/CarouselData.jsx';
describe('Carousel Component', () => {
  it('should render pagination buttons for all images', () => {
    render(<Carousel />);

    // Check if all pagination buttons are rendered
    const paginationButtons = screen.getAllByRole('button', { name: /\d+/ });
    expect(paginationButtons.length).toBe(images.length);
  });

  it('should display the correct image when a pagination button is clicked', () => {
    render(<Carousel />);

    // Get all pagination buttons
    const paginationButtons = screen.getAllByRole('button', { name: /\d+/ });

    // Click on the second pagination button (index 1)
    fireEvent.click(paginationButtons[1]);

    // Check if the image corresponding to the second page is displayed
    const displayedImage = screen.getByRole('img');
    expect(displayedImage.src).toContain(images[1].img);
  });

  it('should highlight the active pagination button', () => {
    render(<Carousel />);

    // Click on the third pagination button (index 2)
    const paginationButtons = screen.getAllByRole('button', { name: /\d+/ });
    fireEvent.click(paginationButtons[2]);

    // Check if the third button has the 'active' class
    expect(paginationButtons[2].classList).toContain('active');
  });
});
