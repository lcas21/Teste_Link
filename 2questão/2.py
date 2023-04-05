def fibonacci (i) : 
    ##Primeiramente iremos fazer uma função para fazer a sequencia de fibonacci

    a=0
    b=1

    if i==0 or i==1:
        return True 
    while b < i :
        c = a + b
        a = b
        b = c

    if b == i:
        return True
    else:
        return False

def main ():
    ##Agora iremos fazer a função principal

    print ("Digite um número inteiro positivo:")
    i = int (input ())
    if fibonacci (i):
        print ("O número %d pertence a sequência de Fibonacci" % i)
    else:
        print ("O número %d não pertence a sequência de Fibonacci" % i)


main()

        