
# Decoupling of Components (React)

- 1. When i'm have something repetitive
- 2. When i'm can isolated something of your context (without to harm the origem comportament)
- 3. In page (at code), verify if there is before of return, functions, variables, useEffect, States, etc... if true, find if is using only a once. If true, put as
component
- 4. Functions pure: not dependency of informations extern, only there is necessary of
parameters required. Her not dependency of any middle extern. In comment previous, is established that if there is presence of functions, variables, etc, at code. Is necessary perform a component. But, i mean, when necessary, creating a component pure,
i.e, that will receive an function or something of type. Warning: have careful at time of transfer the logic of component.
- 5. Always use ´on´ or ´handle´... always that will creating an function in of
component and it's function is user triggered using an event, i.e: `onClick`, `onSubmit`, etc. Always prefix with 'handle', how example: handleCreateNewTodo. For functions auxiliaries use `on`, how example:
functions of calculate.
- 6. Pattern Composition versus Pattern Configuration (Component): 
  - Declaration of multiple configurations in a component, how example: you will use
  label, icon, leftIcon and errorMessage. I.e, will happen an confusion at code, because there is presence of pretty props.
  - Separation at components individual, possibly the use of shape dynamic.
    - Using functions and props for perform a layout dynamic, only necessary import how a object.
- 7. Conditions at render (operations javascript in html): avoid using very operations
at html, because can overhead the client.
