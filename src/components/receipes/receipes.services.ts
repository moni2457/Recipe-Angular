import { Receipe } from './receipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ReceipesServices {
  recipeChanged = new Subject<Receipe[]>();
    recipeSelected = new EventEmitter<Receipe>();
  private recipes  : Receipe[] = [
        new Receipe("Dosa", "Fucking tasty", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGRcYGBgXFxcXFxgYFxUYFxUaFxcYHSggHRolHRcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy8lHyYtLS0vLS4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOAA4AMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAADBAIFBgEHAAj/xAA8EAABAwIEAwYFAgUDBAMAAAABAAIRAwQFITFBElFhBhMicYGRMqGx0fBCwRQjUmLhB3LxY4Ki4hUWQ//EABkBAAMBAQEAAAAAAAAAAAAAAAADBAIBBf/EACwRAAIDAAICAQIFAwUAAAAAAAABAgMREiEEMUEyURMiYYHBFEJxUpGhseH/2gAMAwEAAhEDEQA/ACurk1M/ifrGzP0tC1mG0AG5ASsFhB7yu936WmB6L0HDmkNE6qtk6AY09raVQu0DXEnbILwCTUqQNScl61/qfQrVbZzaJIDYdUA/WOXkFjux/Zt8irUhvKdY6Lj+wI2vYXCRbUc86j8z57BM4gX1bllIZ8Hie7YHZqcq4jTtqBedAMgMy47DzRbJ7aVIVXDx1PER+ouOgWl0c9jt5c90wNb8ZyA5n7KqvMSpWbAajuKo/MxmT/hHEtmpUHFUd8LRt0H7lIHBGniq1vG4ySdYGzQOQXMOkrLE/wCNqMYwEU2w9xI1P6Qr+7GRjmPkq7s7bCnTc8gNdUMgcm6N+Sdc/iMDTmsSNRDMOS+cwHzQqlVrTHEEzCSNIAIgapU10lcA5ou8S44LhCACN0lSalahMZGCiUyV0CZapOaoAbokoAhClwr5xhcFVAHCM18QoucVDjnIhAEwAuhy5CIAgCJQqReTMQPmUUrnFCAPPOwNmSzjJMEk+q3NarwNJ3jLp1VRYURa27RGbQAG83FMNDncAcZJPE702VOCNG+5BHij4c5/dZ3+EaXTPGdgJDR+yvLm5yMnVI1rkN0EnbYITDBD+EPEKlcAgH+VSbnnzPVOue9ruJwD67smMHw0x1SYuiHSM3HVx/SOTQmm3DRm0FxOp5+ZQ2CRKo7ugX1HcVQ8vo0ckrY39R2bmwNmnfzU2sc48R1TFG2zWXI0okmVS8yf8J2gCSQu0qMbItFp4idoSmzaRJlkyZ4RKbCi1dWTRJfIb6hGii6rAkoANE6FScICgwZTKnxFAEJHJdhdC4XIA7K+4kIlTFUAcygCb6kNUKoS1xeggaa6JtgkIACyrKIRIQ2UAHRzRyYQAq1xBg+6a4slF9YDMpd1cnOPZADHeLpModN8ozaLzo0oAzgfxvLjtkwfUnqmmuDQTPSfqq99QMnOXHflOUBU2K4tI7tum5VTEIHf3tWo88BhgyH3XLei+Zc+Sl6FTqtP2fsg88ThIGg5lTznxWsdGHJ4hK2tJPNWDLX0WgaxrdgFPv2aEhSPzF9iheMympUQEw1qfqUGHMQgvtTsVuPkQfsw6ZIVdxZR6jmmGO2hQLIUmBO1P0LzA7VKQgBy6RKACOCiWCQTnHsoNgZBTlAEy/0UVwFR10QBKV8XFfcKiUABqEzO3JAoAgkg5HYo188tALRxJdtzP2XTg5VYwxLR5pltUDRVj2x+pcbUOiDozcVM5ChUvNtkrUqZwhPcSIAQAWvWdtHqrDA8FqO8b3FreW5Hlsp9ncMDvG/MNOU7n/CuMXvw1hAJnTJYnNRQJBn06VFswBG5zK5VxNgEDMxOizdW5c9vG8+Bp3M/IalU+L49TpHhPE4hvFJa4NjWS6Iy5KR+Q36RvDMXF4+PF8TpOW3IfVAtqE5lApOkydVZ2xzXpykJjHAlK3W2wa34aYA5SfMrNWVLjcAOa2dpkIC8/wAufqJZRH2wNa3JQ2WqsYUXU157RWpCYtclzxN5p+EN4WZL7GlL7irLnmEYBpzCGaA8l0ktXI2zj8nZVwl8HXW8nJGZhs6v9glWXO0ozbsHIaqmHmtexE/E+w4zDmcyiDD2dfdJfxBmJRW3R5qiPlRZPLx2hh2HUzsfdCdY0/hDiD5hdddk9EuAAev7rsvJ/wBIRo+5IYbGQqT5oFWxqDOAfL7JkNkJmlUIyPuuw8jXjOSpxaikrE7iPPJJ1oC1VVjXCHAEdVU3+DyCaZz5H9iqVIRhUahIS9riNW+eaZkt8JkEagpetd5RHmu6GDLIAzKg2oNyP2Ve+4nTLzQg6d1zQPRrF4p2zXbBvEfXNUtf+Y2Scz7I1jc8dlGpaOE+mnyVR/C1jTJaYA0gxPPVR+RNqSRtIje41RpljH1AHNIcWwT4cxtvuq/GsUpXVJ4pPDuHVpEGOo1hee9urpwuMyRLWmATA2P0VJh+IOY8OaZA1zyOeYPRJUG+0c5NM2FBWNBDo2sJynTXothhf9nKEku9Fq6FOAq3CbXgYBvv5q0YF5ds+UtL4R4xw6SoPcpval3lKlqNxxneNceShuKh3iXoxIl3ii54OS45yg8clhsYkAqshVxuSHREH6ol1Wc065dUGpVD4PL6pDe+iiMcXZZUXnU5lNNrnloq6m6YgbIzmGPbdPjJpdE8oJvsM+5KlTuilHUCdSpFpCy7JI1wiXVs4FTusgq+1qac1a1yOCToqoT5RZLOHGRXVap55KAeeaE6ry1RnOyE5HlutKW/Jlxz4IV7VtX49ee6z+KYS+nm3xM+Y8wtGx/yXXVQmwulEXKpM89LwX8LpIPIfUpqlaDRstPurPHcNYyajBEnxR1OqrH3cN1+6uhYprUSyjxeFxgV53TiHGWuycP3V3a0oJGvEDwkfCR9+iwAuxzWhwjFvDsW7t29ORWLa+RxGf7W9l3XJdEGoxwa2fC2CJdxGSYWLxXsbd0K4pNp94CJD6Yc4Eby0CWwea9eqWzXkPonxSSWuMSfoUaox1MNf4gQOFzScnSdB1B0Kn2dfwHyZWyt3PPAwEnly6k8lpcMwhjSOKHv/wDFvlzPVO3FJlFvd0xHM7nzKNYths7lNvtzpDqq97Y7TbCKEOmpOcoGVHzylahU6lVK1quaXKSGRiTM7lQJUDVyQXVEtyGqIem6UamEm0g+Sct37IWfIPfgqu0joDWtGZ1PRI2hjJN4hD6pnbKPJcoUhO6UoNy0dyyCiN0yjFy6xjeal3WWSo4Mn5IGAmqVOUOixWFu2FhQ5MHLBCsO7PmlMSxgQGDMDU9eS52luYcB6qgFWSkTsabjEohWpJSZdWd9ud/yU+x4dv6Kqp0hAA25ozZBlOhNpYxM4JvodflrkiWrW1JBmBHrmfz1QKVTjyOqO21LN80+Eu9zUKnHrPkBjNIOpOaNBv5LCXNTgdA8R5DZbS+vS0cJ1dPss5d0QXCIBO8Zr0fG1x0gvxSwpX1H6lmWw+6JZXBYQQIB1Csn0WnmfQpC6e1oOWY9/ZUCS9sbsHQrSWNwSImRyOY+a8xt7sjxNIB5E/ULVYFj7XeF3hd8j5FcaO6WjqhfUkyJMAHqrhjYCoMHcalxxata0u9TkP39lfVHryJT5PT0+GYgrq0BBqVku+sgVKiW5G4wGXVJQahBS4qHRFZTlYb03mHweoPdyTLaCMy1ESucTvJCFNhOko9apwNJ3jTqmarg0ZLM4lecT8jkPmUtvDaWjQG/7o9ERqq2jU4sgFZ0WGAtxkvhHJRY1TbuOaMxxUaLCjtYZ/JT0xDGqdKc19e3IpNLjt+AI1DIE+yyPaLEOOpwA+FuvU7+33Wb5KC1e2FMXOWP0hC5rGo4uOpQ6ZgqLhyTdtanX/KgjFtl8pJIatnKxplKW9I8oT1Kl8tVVFMmk0R/hT8QMQnLmvLQAfEYhL3N1A4W/wDCHh1OXBU1V8niEWTxayv7T1eGrTbyptn1Lis3fXj+LgpxPMzkrPHqneXNRw0B4R5NAb9QVX1qEjceS9lRxYeU3r0g2nUBH8yNSTl8gV9SoEwXQ8l2sbayStVgHZCo8B1X+W3Ub1D6EeH8yWxw/BKFHNlMT/UfE73P7IOHmbOzFSsZ7jinfMf+RhXNt2PrARwsA5Fwy56Arc3eIU6Yl72tHUgKguu2to3LvJ8gfqkT8mqHuSHQ8eyf0plN2cpcFMuPxOM/9o0/f3VhUcoMZENGgACk/ReTmI9Pdeiz3bIcKVRDe88s1hjEgwgdESjUB0MqNK3LtdFY0LEaAenRcxv0cbS9kKNLmjVIAlGdDRyWX7S41w/y2ZuPy6lYm+IQTkxXtDjGfdtOe5GySsrcuMn2CVtrIkyczqTqVeWFE6LMY6+xzeLoct6QGgT9Cmh0KSsaNBUKJNKR9Ro6KwoWogz6L6nTX17dMpMLnkAASSnwxLWTybbxFN2mxDuWcLfidp05lYhz8yEe+xE1qjqjsgdByGw/N0S3pF2cLz7Jqcuj0q4cI4z6hTCucNEj90i2zdGqt7ajDQU6iPYm6XQd1KCCl7y5jIFSu7iGZ67KspguMnUqnhssROpZHWFpAnIK17wUKTqm4GXVxyHzULK2hUfavE5e2i3RubuUxkPQfVejRUokN1jkVbT6k/VegdmezwpgVaompqBsz/26qg7B4V3lU1nZtZEcuPb2GfqEx/qH25baM4KXirO+EchzMbJl1qgv1MVVOx4i87S9rbe0bNR44tm7k9AvLcY/1CurgxTPdM5/qWLuK76rzUquLnnUnbo0bBfVa0DL5Lz5xnZ9T/b4/wDT1K411LpfuWtSq5+dR73k7knNJvrhhgtgbHJAtb0DJ0+ZRsRe1zctddD9UtUcZY10NnfsNi+z2A1186sOaWqNMqIZ0zSNZlJDQcDmpNIOiARloncMs5PF9ZWe/SO9JaywtWACAmHVAN9kGo7h/Pz8KpMXxQMB56QNT5LMrOCMxr5sJjuKBjcs3HID82WXtbWTxOzccym7Zjnu43jM89AFa0qA6D2SUnJ8mU9QWIVtaICsaTOSnStwn6FrKpjEnlIjbUCVaUKClQt4AKFiWJ06DC6o4NA9yeQHPyT+CitkTOTk8iM3FdtNpc8wACSTsvNe0GNuunw0RTB8I5n+oj9tl9iuNVLt27aQOTZzMaF3XpsmsNw8akKG692vjH0XU0KpcpexWxw4uILtFoaNpAiAEahaxGSddQyRCGHLLNEmUo2OSPccIYYUXVIETz80pwk5u1VdKbfRNb61ijmFxzT9rbQiUaClfXTaNM1HkAATmvSrrUURWWOQnj2KNt6f9xyA6rAm4LjxEkkmSeZ3KRxnGHXFUvPw/pHIfdCo3PsqF0IfZ7Bgl0y1wwVn7gvMD+ow35QvBr6+dcVn1nmS45DYN2AC9b7cXJZgbeHcU2H1gLxxogKOz81jf26/l/wXUJRr/wA/wSdUhAqVz5KL3SpPY0Oa2WtnMmdOgG5+ydCAqyxsj3g5o5rGOERHn/yo3dRtV3DSaSGiS9w4S7SfCJhszul2MESDr11nqtOP3FqT+D3U1ZQHtM5fddpWTuvqU1RsIOZJn8yC8Rps9bYoHSp1IkxHp8lc2NccwSOSBXjhAa0iFSm97t3v6JLnxYxQ5xLfGsSFNpJjJZW3D6r+9f6DkPug1Lp1w+f/AM2nKdCefkrGi4CAPEen3Sm3N6xkY8FiLChQnXRNh0DQhAw6ux5jMEbK/o0soIyTo9+hM3x+oBZsaYMgqxp04SpsGiDMb5HRV+L48y2aS4ydGgak7BNVn4f1CHH8R/kGcex9lsySZd+lo1J+3VeeXNxUuaneVT/tGzR0+6Ur3D69Q1KhzOgzgDkOisrC20Ud10pvC+miNS35GLWzzWisLcjXRBsrWBPRXNpSykrdVeCrrCbBGqDWfqJJ+qlXfJy/PNCayOpOp5qqup2P9CWUlFa/YFtOM9/p5ItOkiNYm7e2nM5NGZJyAA1JPJerVUorEQ2WN9sEynlJyAzJ2yXkfbbtP/E1e7pH+Sw6/wBZG/8At5e6u+33as1gba2JFEfG/Q1Y2HJn18tcI2kqCf2fUyjs0lQbT6I4aCEAei9oKBuMHr025uYxtVoGpFMhzo/7QV5C7Rey9mL2KdNw/pAPoIIWD7bdmP4Wp3lITbVSSz/puOZpnyzjmPIpFkf7iuif9pi61YU/Ecz+kdUxiFMOpUXOaeJs8TWghx4spLjIyIAyG55FJ3dpUkOBOWYjbPb2Xb2rXqiCGgeEktbElogE56/JbjZHPZmVUl8BrKpwtc+qQGFo4WSDwgiZ4JDZiIBB+KeEoAdLiWyGZRMa75NyAPLZAFpzcToJ1OQga8oC+NPhcCHOjKdNN9Pst7orMP0dJT+G0+IzGQ/IWQvsYqgH+ZHkAEz2R7RHv+7e8kPgAn+oaD1n5BeCrlyxnqyplxbRpcbqd2eKMl5n2ivO9rmnSPhPxHpvn8luu32KCnRDG/G/TmBuf2WXwrBBRYKtdwYXZgO+I9ANSUq363g2h5BNhcOshkM4GwyC1mE4aGjigBUmHY3a94GS4bBxbDfU7LbUWjKBkt01oxfazH32GPZULogE5fmyusDuiBwP1Gk6kbK5rcMeLReddqsW4KxbSOYiBOnnCJx/CexZquX48eMl+5qsax1lEQc3GYaNSVgL+yuLl3G4+QGgB2CNhVHvH8VR4L3bn6AfstzZ2QAiPVTcpWS0fxhRH9TCW2B1Q4S1wG8QZV/YYPwkEOkciI/CtTRthOYRjSDYyTV4/wAsTLyvhC9vaADSDyQ7mofhC7cXZJhmmhP2Q2hV11Kf+P8AsmlJx7ZxghTaxEo0STkE3VNOiJeZds0a/wCAvTrq66IrLSNK3AaX1CGtGpKyXavGX1gaVOWUhtu//d06J/EcQfVMmIGjRoP8qjxCIzVGYTOWmSurI5pEW3CtPSc2oTGfLr7f4QK1n0XARnjSJ2UCICtatAg6JGvQJ/dB00XYvEAWupT4mmY6O5esrTis1zXUqrQ+k/JzTvyIOxGoIXmOH1H0KragMgZEcwdfv6L0CnWDwHNMggFDR1MyvaLsm+3Bq0ZrUOY+OmOVRo2/uGXOFlrky0gDVewWFw5pBBhDxHsta3MuDe5qH9VMDhJ/uZp7QpLPH75QLK/KWcZ/7nhlajVaNcoOw/Cgh4eCB8td9ZXpuLdgbpmbGNrN50zn6sOc+UrA41hlSg4k03tO/G0t+oC7VZLcmsOW1wzlW9PTLnD+LP8AIUsEww94Kr8qdI8bidyMwBzkgLS//EPa7+pnnmgYpQe5oZENGcDc9V5EqWn6PSjamumLYNbG7uXV6oljNB5fCPTXzVZi9yXvcXnOTHIAaAdAtH2ZqikHsdlOY9oVRjTaQJcSM8x/wsuKUP1+TsX+d/b4M8KROZybzXoPZvGWutGmTLJYZ34dD7ELCUK4e+HNIZtyJ6wrO+uqbWCl3gps1cT8RnZrRn6rMZNL8pqcFLqRYY5j76n8uhJdu7YKspdmKrWd44cbiROcZk/E4nOAu9nsbpi5p0KdF3A6QKjsjxAcUxyMEeq9AvCOE+XRZdb7cmddyhkYIydpZta8cLBMAAkbE7H0lbCkcgs1QeA8aTP55K5ZeZQMz00WquniM+Sm8Gn1YEpOrUL+YHzKIy2c4yczy2Cfp4fAlxDRzOS9CrxpS+ogndGHr2VtOlsArGhYwOJ5DRzKi7EKbMqY4jzOQ9BqVXXVw9+biTyGw8gvSrpS9kVlzl6GrvGA3w0hH95H0H3Weub8cWclzjEnU80y6UvWoNJEjxc+UjMTsn4T6fPcNvlpPosn2lNQEuYIO+RIIHOMj6qz7Q4qKDSI/SXe3I+azP8A9h72pTzIYRwvHUzn9PZTXzjnFs6UdpiL6bwTJg6H6Z9FpLDHy+rHBNM6ASXCAfeTH1St72dHxPrmCcyRn0gyVU2tY0HuDDxtMCTkYB15KdKdfbeAbe7oiJj1Kqq9EDqr2lYte0ElxBAI8R38gBvySd1h1NgLuAkDc5/TMqvZfCO6ULqQO4PkU1hWIGieB3wHT+0/ZI3uKspu8LQW6OG/m3YjzTFw+i8BzaggxqCDJEwRsVmFsZL2Gmvtq4MdVe2RXnWH1alI5+JnntzB/ZbLBsQY7Q58jkR6Jh01duU0aYcIcA4ciAR7FIWtRWFIoArXIFRqYpYhbv8A1x/uBH1RxQpu0e0+RCTKofG1IpqtsDsqu+wJj8yMxyyWvGG9VF2Ff3BIl42+0Pj5OemedXWBPAhr3gdHEfRULcFNJ5JEg78vP7r152F0/wBVRvuEB9raD4n8XkCfoFn+kfwM/rF8mNwKwmox4GjsvotrUaXNgAkkaapWnTtmEmk14n0HtKNTxBzfgAG0kSfsk/0MnPH6Cflxa1AbXs5ULuJ3hHL9yrNlKhRGbgTybn9FU1q9R/xPcem3sMlGlS5r0KvFrrXSJLfKssfbLWrjEZU2BvU5n2VbVc+pLnuJO0kx6AZLnEOalMKlIm0+AmJ1XXkroKC6mZkHJBwG4SJmI6ckpd14H7o9ehI8REztKXq0AZknPJdAyuOE1vBJc06hsH3MZBUNWxbTrtDPEIJI1giTr5Baq5wUlzWB5a3Mkj4nGdCdAIRKnZ5rab+4Ja52pJLiRGgPXLkobap2S9df8nGZfD8SZUc7vIEDwH9I1mZ9FT0bJ4Bc7IEuidwN/dajAOzxdUPeUjwAkT8JDmiZ6icslp34HQLC1zJHmZHrMhLjTOdeLoCr7MVS63YNC0cPoPhjpEKzrvABnT3y8kSwwynRbwU9JJgmfrsmHsbof+VbCLUUmaMTiTrXjDnsdImIA4X8jl+8Kjp2jq1R1SnwyHTw5TGohp1HotjimC58bWsyzzyAMaxosnbYa573sAcSD8TRMZwZA1aeY/dQ3pp411+hxmtsrVzqbe8aQd5GeuWgCZGHAGc59vZOYdallNtOQ6BGQjnoEx3R0I/N1dBflWnRe3xCrSIBeCOTtfcK+s8d/qYfQyqwW8/mqLTokHp81vDugO70hSDIzKK1h3PyXWAkZruHNOAzpop8ErlNzSSBEjI9DE/umn04Hv5owNBtbvC5ToE/FE/Toi0c80c5IwNF+7RIXxM6LgRgE2hcJySV1VeCOCNpnLLdM0nSM10AAt85k7b8kR9WNkUhQqMy0QGEeLNTG+fzP7KDKeS6QgD5lOVx1NdaYUakHXbzQApXtxpJXLekWnMyOScDcoU+AIOEclEtmYRXMXC0cigAIpRpP2UKdsJJOe+/yCbjMKRbyQAhXpyJI9/ZKWlvTJlo9YzVy+DkgVKZgRAHlr9kYgEHuf3g4J4YIPh3ygySOukpssP5+fkJhjJ0yUyEABp8vYe6MKa4GqZyQB//2Q==",
        [new Ingredient('Rice', 1), new Ingredient('Potato', 10)]),
        new Receipe("Dal Makhani", "Mind boggling", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuVEmtv2biwlXcTYMrAKnpQbEQXyDVB6lAyyDDM7fQyULDUzyM&usqp=CAU", 
        [new Ingredient('Butter', 1), new Ingredient('Black Dal', 10), new Ingredient('Lentils', 10)]),
        new Receipe("Ragda Paticce", "Eternal Satisfaction", "https://ministryofcurry.com/wp-content/uploads/2017/08/IMG_6028.jpg", 
        [new Ingredient('Lentils', 1), new Ingredient('Potato', 10)])
      ]

      constructor() {
      }

      getRecipes() {
         return this.recipes.slice();
      }
      getRecipe(index: number) {
          return this.recipes[index];
      }
      addRecipe(recipe: Receipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes)
      }
      updateRecipe(index: number, recipe: Receipe){
        this.recipes[index] = recipe;
        this.recipeChanged.next(this.recipes)
      }

      deleteRecipe(index: number) {
        this.recipes.splice(index, 1)
        this.recipeChanged.next(this.recipes)
      }
}