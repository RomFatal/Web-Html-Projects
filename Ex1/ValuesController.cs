using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Online.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }


        //   GET api/values/GetFiveRandomNumbers

        [HttpGet("GetFiveRandomNumbers")]

        public List<int> GetFiveRandomNumbers()

        {

            var numbers = new List<int>();

            var rnd = new Random();

            int count = 0;

            while (count < 5)
            {

                int newNum = rnd.Next(1, 21); // generate a random number between 1- 20

                if (!numbers.Contains(newNum))
                {

                    numbers.Add(newNum);

                    count++;

                }

            }

            return numbers;

        }

        //10
        [HttpGet("Letters_To_Int")]
        public List<int> Location_of_letters(string x)
        {

            var numbers = new List<int>();
            if (x == null)
            {
                numbers.Add(-1);
                return numbers;
            }
            char[] letters = x.ToCharArray();

            foreach (char c in letters)
            {
                if ((c > 64 && c < 91) || (c > 96 && c < 123))
                {
                    var index = (c < 97 ? c - 64 : c - 96);
                    numbers.Add(index);
                }
                else
                    numbers.Add(-1);

            }
            return numbers;
        }

        //18

        [HttpGet("Word_To_index")]
        public string Word_from_index(string x, int i)
        {
            if (x == null)
                return "error";
            string[] words = x.Split(' ');
            if (words.Length > i && i > 0)
                return words[i - 1];
            else
                return "error";
        }

        //19
        [HttpGet("Print_Previod_numbers")]
        public List<int> Print_numbers(int x)
        {
            var numbers = new List<int>();

            if (x <= 0)

            {
                numbers.Add(-1);
                return numbers;
            }

            for (int i = 0; i < x - 1; i++)
            {
                numbers.Add(i + 1);
            }

            return numbers;
        }

        //13

        [HttpGet("Print_Arithmetic")]
        public List<double> Print_Arithmetic(double x, double y)
        {
            var numbers = new List<double>();

            numbers.Add(x + y);
            numbers.Add(x - y);
            numbers.Add(x * y);

            if (y == 0)
                numbers.Add(-1);
            else
                numbers.Add(x / y);
            return numbers;
        }

        //7

        [HttpGet("Word_to_int_length")]
        public List<int> Word_to_int_length(string x)
        {
            var numbers = new List<int>();
            if (x == null)
            {
                numbers.Add(-1);
                return numbers;
            }
            string[] words = x.Split(' ');


            foreach (string s in words)
            {
                numbers.Add(s.Length);
            }
            return numbers;
        }

        //8
        [HttpGet("Word2_to_1word")]
        public string Word2_to_1word(string x, string y)
        {
            if (x == null && y == null)
                return "error";
            if (x == null)
                return y;
            
            return x + " " + y;
        }




    }
}