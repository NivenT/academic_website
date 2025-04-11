---
layout: page
title: none
has_math: true
---

The moduli stack $$\mathscr Y(1)$$ of elliptic curves has Euler characteristic $$-1/12$$. There are many ways to compute this, but the easiest I know is the following:

Let $$\mathscr Y(2)$$ be the moduli stack of elliptic curves equipped with full level $$2$$ structure, and let $$Y(2):=\A^1-\{0,1\}=\P^1-\{0,1,\infty\}$$. Then, $$\mathscr Y(2)\to\mathscr Y(1)$$ is a Galois cover with Galois group $$\GL_2(\F_2)\cong S_3$$. Furthermore, the Legendre family $$E_\lambda:y^2=x(x-1)(x-\lambda)$$ gives a map $$Y(2)\too\mathscr Y(2)$$ which one can show is a Galois double cover (in fact, $$\mathscr Y(2)\cong B\Z/2\Z_{Y(2)}$$ as a $$\Z[1/2]$$-stack). Since the maps $$Y(2)\to\mathscr Y(2)$$ and $$\mathscr Y(2)\too\mathscr Y(1)$$ are finite \'etale (they're both torsors under constant groups), one has

$$-1=\chi(\P^1)-3=\chi(Y(2))=2\chi(\mathscr Y(2))=2\cdot6\chi(\mathscr Y(1))\implies\mathscr Y(1)=-1/12.$$

After cdoing this computation, one realizes that also $$\zeta(-1)=-1/12$$. Why is this? Morally, why is the Euler characteristic of the moduli stack of elliptic curves a special zeta value? How could one guess this without having to compute either $$\chi(\mathscr Y(1))$$ or $$\zeta(-1)$$?
