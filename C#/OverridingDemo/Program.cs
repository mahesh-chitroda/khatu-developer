using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace OverridingDemo
{
    #region [Scenario 1]
    //class SampleA
    //{
    //    public void Show()
    //    {
    //        Console.WriteLine("Sample A Test Method");
    //    }
    //}

    //class SampleB : SampleA
    //{
    //    public void Show() // Warning: SampleB.Show() hides inherited member SampleA.Show(). Use the new keyword if hide is intended.
    //    {
    //        Console.WriteLine("Sample B Test Method");
    //    }
    //}
    //class Program
    //{
    //    static void Main(string[] args)
    //    {
    //        SampleA a = new SampleA();
    //        SampleB b = new SampleB();
    //        a.Show();
    //        b.Show();
    //        a = new SampleB();
    //        a.Show();
    //        Console.ReadLine();
    //    }
    //}
    #endregion

    #region[Scenario 2]
    //class SampleA
    //{
    //    public void Show()
    //    {
    //        Console.WriteLine("Sample A Test Method");
    //    }
    //}

    //class SampleB : SampleA
    //{
    //    public new void Show()
    //    {
    //        Console.WriteLine("Sample B Test Method");
    //    }
    //}
    //class Program
    //{
    //    static void Main(string[] args)
    //    {
    //        SampleA a = new SampleA();
    //        SampleB b = new SampleB();
    //        a.Show();
    //        b.Show();
    //        a = new SampleA();
    //        a.Show();
    //        Console.ReadLine();
    //    }
    //}
    #endregion

    #region[Scenario 3]
    //class SampleA
    //{
    //    public void Show()
    //    {
    //        Console.WriteLine("Sample A Test Method");
    //    }
    //}

    //class SampleB : SampleA
    //{
    //    public new void Show()
    //    {
    //        Console.WriteLine("Sample B Test Method");
    //    }
    //}
    //class Program
    //{
    //    static void Main(string[] args)
    //    {
    //        SampleA a = new SampleA();
    //        SampleB b = new SampleB();
    //        a.Show();
    //        b.Show();
    //        b = new SampleA(); // Error : Type cast requiered
    //        b.Show();
    //        Console.ReadLine();
    //    }
    //}
    #endregion

    #region[Scenario 4]
    //class SampleA
    //{
    //    public virtual void Show()
    //    {
    //        Console.WriteLine("Sample A Test Method");
    //    }
    //}

    //class SampleB : SampleA
    //{
    //    public override void Show()
    //    {
    //        Console.WriteLine("Sample B Test Method");
    //    }
    //}
    //class Program
    //{
    //    static void Main(string[] args)
    //    {
    //        SampleA a = new SampleA();
    //        SampleB b = new SampleB();
    //        a.Show();
    //        b.Show();
    //        a = new SampleB();
    //        a.Show();
    //        Console.ReadLine();
    //    }
    //}
    #endregion

    #region[Scenario 5]
    class SampleA
    {
        public void Show()
        {
            Console.WriteLine("Sample A Test Method");
        }
    }

    class SampleB : SampleA
    {
        public new virtual void Show()
        {
            Console.WriteLine("Sample B Test Method");
        }
    }
    class SampleC : SampleB
    {
        public override void Show()
        {
            Console.WriteLine("Sample C Test Method");
        }
    }
    class Program
    {
        static void Main(string[] args)
        {
            SampleA a = new SampleA();
            SampleB b = new SampleB();
            SampleC c = new SampleC();
            a.Show();
            b.Show();
            c.Show();
            a = new SampleB();
            a.Show();
            b = new SampleC();
            b.Show();
            Console.ReadLine();
        }
    }
    #endregion
}
