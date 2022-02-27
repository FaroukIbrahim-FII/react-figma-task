import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import FilteringComponent from "../components/FilteringComponent";
import Products from "../components/Products";
import { store } from "../redux/store";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";

test("When going to the home page, no condition filter should be selected.", () => {
  render(
    <Provider store={store}>
      <FilteringComponent />
    </Provider>
  );
  expect(screen.getAllByRole("radio")).not.toBeChecked;
});

test("When choosing one of the condition filters, that condition should be choosen", () => {
  render(
    <Provider store={store}>
      <FilteringComponent />
    </Provider>
  );
  const brandNew = screen.getByDisplayValue("new");
  expect(brandNew.checked).toEqual(false);
  userEvent.click(brandNew);
  expect(brandNew.checked).toEqual(true);
});
test("When choosing one of the condition filters, elements with that condition should be displayed", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
  const brandNew = screen.getByDisplayValue("new");
  expect(brandNew.checked).toEqual(false);
  userEvent.click(brandNew);
  expect(brandNew.checked).toEqual(true);

  const images = screen.getAllByRole("img");
  expect(images.length).toEqual(2);

  expect(images[0]).toHaveAttribute("alt", "Blue Bage");
  expect(images[0]).not.toHaveAttribute("alt", "Blue Shirt");
  expect(images[0]).not.toHaveAttribute("alt", "Brown Jacket");
  expect(images[0]).not.toHaveAttribute("alt", "Lether Wallet");
  expect(images[0]).not.toHaveAttribute("alt", "Toxedo");

  expect(images[1]).toHaveAttribute("alt", "Shorts");
  expect(images[1]).not.toHaveAttribute("alt", "Blue Shirt");
  expect(images[1]).not.toHaveAttribute("alt", "Brown Jacket");
  expect(images[1]).not.toHaveAttribute("alt", "Lether Wallet");
  expect(images[1]).not.toHaveAttribute("alt", "Toxedo");
});

test("When choosing a price range, elements in that price range should be displayed", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
  const priceButton = screen.getByRole("button", { name: /apply/i });
  userEvent.click(priceButton);

  const images = screen.getAllByRole("img");
  expect(images.length).toEqual(2); //after choosing "new" there will be two items that are priced between $50 and $100

  expect(images[0]).toHaveAttribute("alt", "Blue Bage");
  expect(images[0]).not.toHaveAttribute("alt", "Blue Shirt");
  expect(images[0]).not.toHaveAttribute("alt", "Brown Jacket");
  expect(images[0]).not.toHaveAttribute("alt", "Lether Wallet");
  expect(images[0]).not.toHaveAttribute("alt", "Toxedo");

  expect(images[1]).toHaveAttribute("alt", "Shorts");
  expect(images[1]).not.toHaveAttribute("alt", "Blue Shirt");
  expect(images[1]).not.toHaveAttribute("alt", "Brown Jacket");
  expect(images[1]).not.toHaveAttribute("alt", "Lether Wallet");
  expect(images[1]).not.toHaveAttribute("alt", "Toxedo");
});

test("When choosing rate filter, elements with that rate should be displayed", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
  const checkbox = screen.getByTestId("star1");
  expect(checkbox).toHaveAttribute("name", "1");
  userEvent.click(checkbox);

  const images = screen.getAllByRole("img");
  expect(images.length).toEqual(1); //there is only one item with rate 4

  expect(images[0]).toHaveAttribute("alt", "Shorts");
  expect(images[0]).not.toHaveAttribute("alt", "Blue Shirt");
  expect(images[0]).not.toHaveAttribute("alt", "Brown Jacket");
  expect(images[0]).not.toHaveAttribute("alt", "Lether Wallet");
  expect(images[0]).not.toHaveAttribute("alt", "Toxedo");
  expect(images[0]).not.toHaveAttribute("alt", "Blue Bage");
});
