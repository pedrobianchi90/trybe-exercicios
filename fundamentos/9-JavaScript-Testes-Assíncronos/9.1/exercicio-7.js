const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

  test('Testando se transforma a string em maiúsula', (done) => {
      upperCase(teste, (str) => {
          try {
              expect(str).toBe('TESTE');
          }
          catch (error) {
          done(error);
          }
      });
  });