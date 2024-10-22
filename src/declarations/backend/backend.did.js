export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getGreeting' : IDL.Func([], [IDL.Text], ['query']),
    'setGreeting' : IDL.Func([IDL.Text], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
