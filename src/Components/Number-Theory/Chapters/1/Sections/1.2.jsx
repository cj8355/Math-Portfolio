import { Link } from "react-router-dom";
import "./1.2.css";
import { MathComponent } from "mathjax-react";

export default function NumberTheory_Ch1_Sec2() {
    
    
    return (
        <div className='container'> 
        <h1>Ch. 1 Sec. 2 Sums and Products</h1>
        <div className="sectionText">

      
      <h2>Summation Notation</h2>
      <p className="textBorder">
       <p>The following notation represents the sum of the numbers</p>
        <MathComponent tex="\mathrm{a_{1}, a_{2}, ..., a_{n}:}" />
        <MathComponent tex="\sum_{k=1}^{n} a_{k} = a_{1} + a_{2} + ... + a_{n}." />
        *8
      </p>


      <h2>3 Properties of Summations</h2>
      <p className="textBorder">
       <p>The following three properties for summations are often useful.</p>
        <MathComponent tex="\sum_{j=m}^{n} ca_{j} = c \sum_{j=m}^{n} a_{j}" />
        <MathComponent tex="\sum_{j=m}^{n} (a_{j}+b_{j}) = \sum_{j=m}^{n} a_{j} + \sum_{j=m}^{n} b_{j}" />
        <MathComponent tex="\sum_{i=m}^{n} \sum_{j=p}^{q} a_{i}b_{j} = \bigg ( \sum_{i=m}^{n} a_{i} \bigg ) \bigg ( \sum_{j=p}^{q} b_{j} \bigg ) = \sum_{j=p}^{q} \sum_{i=m}^{n} a_{i}b_{j}" />
        *9
      </p>


      <h2>Product Notation</h2>
      <p className="textBorder">
       <p>We also define a notation for products, analogous to that for summations. The product of the numbers</p>
        <MathComponent tex="\mathrm{a_{1}, a_{2}, ..., a_{n} \hspace{.2cm} is \hspace{.2cm} denoted \hspace{.2cm} by}" />
        <MathComponent tex="\prod_{j=1}^{n} a_{j} = a_{1}a_{2} ... a_{n}." />
        *10
      </p>


      <h2>Factorials</h2>
      <p className="textBorder">
       <p>
        Let n be a positive integer. Then n! (read as "n factorial") is the product of the integers 1, 2, ..., n. We also specify that 0! = 1.
        In terms of product notation, we have 
       </p>
        <MathComponent tex="\mathrm{n! = \prod_{j=1}^{n}j.}" />
        *11
      </p>
      



            </div>


            <h1>Examples</h1>
            <div className="examples"> 
            <div className="Example-1">
                    <h3>Example 1</h3>
                    <div className="textBorder">
                      <h4></h4>
                      <p>
                        
                      </p>
                      
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="" />    
                         
                    </p>

                    *
                    </div>
                </div>


                <div className="Example-2">
                    <h3>Example 2</h3>
                    <div className="textBorder">
                      <h4></h4>
                      <p>
                        
                      </p>
                      
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="" />    
                         
                    </p>

                    *
                    </div>
                </div>


                <div className="Example-3">
                    <h3>Example 3</h3>
                    <div className="textBorder">
                      <h4></h4>
                      <p>
                        
                      </p>
                      
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="" />    
                         
                    </p>

                    *
                    </div>
                </div>


                <div className="Example-4">
                    <h3>Example 4</h3>
                    <div className="textBorder">
                      <h4></h4>
                      <p>
                        
                      </p>
                      
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="" />    
                         
                    </p>

                    *
                    </div>
                </div>


                <div className="Example-5">
                    <h3>Example 5</h3>
                    <div className="textBorder">
                      <h4></h4>
                      <p>
                        
                      </p>
                      
                     
                    <p>
                        Answer: <br/>
                         <MathComponent tex="" />    
                         
                    </p>

                    *
                    </div>
                </div>




            </div>
            </div>
           
    );
}