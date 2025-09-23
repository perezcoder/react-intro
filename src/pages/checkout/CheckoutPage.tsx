import { useCheckout } from './hooks/useCheckout';

export function CheckoutPage() {
  const {
    validators, actions,
    user, dirty, totalCartCost
  } = useCheckout();

  return (
    <div className="max-w-sm mx-auto">
      <h1 className="title">CHECKOUT</h1>

      <div className="text-xl my-3 border-b">€ {totalCartCost}</div>

      <form className="flex flex-col gap-3" onSubmit={actions.sendOrder}>
        Your name:
        <input
          type="text" placeholder="your name"
          name="name"
          value={user.name}
          onChange={actions.changeHandler}
          className={`${!validators.isNameValid && dirty ? 'error' : ''}`}
          />

        Your email
        <input
          type="email" placeholder="Your email"
          name="email"
          value={user.email}
          onChange={actions.changeHandler}
          className={`${!validators.isEmailValid && dirty ? 'error' : ''}`}
          />

        <button
          type="submit"
          className={`${validators.isValid ? 'success' : 'primary'}`}
          disabled={!validators.isValid}
        >
          CONFIRM ORDER
        </button>
      </form>

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}
