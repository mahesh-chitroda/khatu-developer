using System;
using System.Runtime.CompilerServices;
using Microsoft.Win32.SafeHandles;
using System.Runtime.InteropServices;
using System.Data.SqlClient;

[assembly: InternalsVisibleToAttribute("Assembly2"), InternalsVisibleToAttribute("ClassAlias")]
namespace Assembly1
{
    class InternalToOtherAssembly : IDisposable
    {
        bool disposed = false;
        // Instantiate a SafeHandle instance.
        SafeHandle handle = new SafeFileHandle(IntPtr.Zero, true);

        internal int multiply(int x, int y)
        {
            return x * y;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        // Protected implementation of Dispose pattern.
        protected virtual void Dispose(bool disposing)
        {            
            if (disposed)
                return;

            if (disposing)
            {
                handle.Dispose();
                // Free any other managed objects here.
                //
            }

            // Free any unmanaged objects here.
            //
            disposed = true;
        }
    }
}
