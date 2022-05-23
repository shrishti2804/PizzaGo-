import {
  FoodDialogStyled,
  FoodDialogContent,
  FoodDialogShadowStyled,
  FoodDialogFooter,
  ConfirmButtonStyled,
} from "../FoodDialog/FoodDialog";

export const OrderDialog = ({
  openOrderDialog,
  setOpenOrderDialog,
  setOrders,
}) => {
  return openOrderDialog ? (
    <>
      <FoodDialogStyled>
        <FoodDialogContent>
          <center>
            <h2>🚚 Your order is on the way!</h2>
            <br />
            <p>Thanks for choosing PizzaGo! Enjoy your meal</p>
          </center>
        </FoodDialogContent>
        <FoodDialogFooter>
          <ConfirmButtonStyled
            onClick={() => {
              setOrders([]);
              setOpenOrderDialog();
            }}
          >
            Browse More...
          </ConfirmButtonStyled>
        </FoodDialogFooter>
      </FoodDialogStyled>
      <FoodDialogShadowStyled />
    </>
  ) : (
    <div />
  );
};
