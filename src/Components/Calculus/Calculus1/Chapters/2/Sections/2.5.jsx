import { Link } from "react-router-dom";
import "./2.5.css";
import { MathComponent } from "mathjax-react";




export default function Calculus1_Ch2_Sec5() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 2 Sec. 5 Limits at Infinity</h1>
        <div className="sectionText">

        <h2>Limits at Infinity and Horizontal Asymptotes</h2>
        <span>
            If f(x) becomes arbitrarily close to a finite number L for all sufficiently large and positive x, then we write
            <MathComponent tex="\lim_{x\to \infty} f(x) = L" />

            We say the limit of f(x) as x approaches infinity is L. In this case, the line y = L is a horizontal asymptote of f. The 
            Limit at negative infinity, 
            <MathComponent tex="\lim_{x\to - \infty} f(x) = M" />
            is defined analogously. When this limit exists, y = M is a horizontal asymptote

           
    
        </span> *32


        <h2>Infinite Limits at Infinity</h2>
        <span>
            If f(x) becomes arbitrarily large as x becomes arbitrarily large, then we write
            <MathComponent tex="\lim_{x\to \infty} f(x) = \infty" />
            The limits <MathComponent tex="\lim_{x\to \infty} f(x) = - \infty" />, <MathComponent tex="\lim_{x\to - \infty} f(x) = \infty" /> and
            <MathComponent tex="\lim_{x\to - \infty} f(x) = - \infty" /> are defined similarly
     
       
    
        </span> *33


        <h2>Limits at Infinity of Powers and Polynomials</h2>
        <span>
            Let n be a positive integer and let p be the polynomial
            <MathComponent tex="p(x) = a_{n} x^{n} + a_{n - 1} x^{n - 1} + ... + a_{2} x^{2} + a_{1} x + a_{0}" />, where <MathComponent tex="a_{n} \neq 0" />

            1. <MathComponent tex="\lim_{x\to \pm \infty} x^{n} =  \infty" /> when n is even
            2. <MathComponent tex="\lim_{x\to \infty} x^{n} =  \infty" /> and <MathComponent tex="\lim_{x\to - \infty} x^{n} = - \infty" /> when n is odd
            3. <MathComponent tex="\lim_{x\to \pm \infty} \frac{1}{x^{n}} =  \lim_{x\to \pm \infty} x^{-n} = 0 " />
            4. <MathComponent tex="\lim_{x\to \pm \infty} p(x) = \lim_{x\to \pm \infty} a_{n} x^{n} = \pm \infty" />, depending on the degree of the polynomial and the
            sign of the leading coefficient <MathComponent tex="a_{n}" /> .

        
     
       
    
        </span> *34
          

        <h2>End behavior and Asymptotes of Rational Functions</h2>
        <span>
            Suppose
            <MathComponent tex="f(x) = \frac{p(x)}{q(x)} " /> is a rational function, where

            <MathComponent tex="p(x) = a_{m} x^{m} + a_{m - 1} x^{m - 1} + ... + a_{2} x^{2} + a_{1} x + a_{0}" /> and
            <MathComponent tex="q(x) = b_{n} x^{n} + b_{n - 1} x^{n - 1} + ... + b_{2} x^{2} + b_{1} x + b_{0}" />

            with <MathComponent tex="a_{m} \neq 0" /> and <MathComponent tex="b_{n} \neq 0" />

            a. Degree of numerator less than degree of denominator
            If  <MathComponent tex="m < n" />, then 
            <MathComponent tex="\lim_{x\to \pm \infty} f(x) = 0" /> and <MathComponent tex="y = 0" /> is a horizontal asymptote of f.
            b. Degree of numerator equals degree of denominator
            If  <MathComponent tex="m = n" />, then 
            <MathComponent tex="\lim_{x\to \pm \infty} f(x) = \frac{a_{m}}{b_{n}}" />, and <MathComponent tex="y = \frac{a_{m}}{b_{n}}" /> is a horizontal asymptote of f.
            c. Degree of numerator greater then degree of denominator
            If  <MathComponent tex="m > n" />, then 
            <MathComponent tex="\lim_{x\to \pm \infty} f(x) = \infty" /> or <MathComponent tex="- \infty" /> and f has no horizontal asymptote.



        </span> *35
        

        <h2>End behavior of <MathComponent tex="e^{x} " />, <MathComponent tex="e^{-x} " /> and <MathComponent tex="ln x" /></h2>
        <span>
            The end behavior for <MathComponent tex="e^{x} " /> and <MathComponent tex="e^{-x} " /> on <MathComponent tex="(- \infty, \infty)" />
            and <MathComponent tex="ln x" /> on <MathComponent tex="(0, \infty)" /> is given by the following limits:

            <MathComponent tex="\lim_{x\to \infty} e^{x} = \infty" /> and <MathComponent tex="\lim_{x\to - \infty} e^{x} = 0" />
            <MathComponent tex="\lim_{x\to \infty} e^{-x} = 0" /> and <MathComponent tex="\lim_{x\to - \infty} e^{-x} = \infty" />
            <MathComponent tex="\lim_{x\to 0^{+}} ln x = - \infty" /> and <MathComponent tex="\lim_{x\to  \infty} ln x = \infty" />



        </span> *36
            
            
            </div>
            <h1>Examples</h1>
            <div className="examples"> 
                <div className="Example1">
                    <h3>Example 1</h3>
                    

                    <span>
                        Graph the function <MathComponent tex="f(x) = \frac{1}{x^{2} - x}" />
                        using a graphing utility with the window
                        <MathComponent tex="[-1,2] x [-10,10]" />
                        Use your graph to determine the following limits
                        <p>
                            a. <MathComponent tex="\lim_{x\to 0^{-}} f(x)" />
                        </p>
                        <p>
                            b. <MathComponent tex="\lim_{x\to 0^{+}} f(x)" />
                        </p>

                        <p>Answer:</p>
                        <p>
                        
                        a. <MathComponent tex="\infty" />
                        b. <MathComponent tex="- \infty" />
                        </p>
                    
                        
                    </span> *
                </div>


               

                
            </div>
            </div>
           
    );
}