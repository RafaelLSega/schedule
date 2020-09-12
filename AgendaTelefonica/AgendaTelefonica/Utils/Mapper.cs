using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace AgendaTelefonica.Utils
{
    public class Mapper
    {
        public static object Map(object source, object destination)
        {
            PropertyInfo[] targetProperties = destination.GetType().GetProperties(BindingFlags.Instance | BindingFlags.Public);
            foreach (var sourceProp in source.GetType().GetProperties(BindingFlags.Instance | BindingFlags.Public))
            {
                object sourceValue = sourceProp.GetValue(source, null);
                if (sourceValue == null) continue;

                int index = Array.IndexOf(targetProperties, sourceProp);
                if (index >= 0)
                {
                    var targetProp = targetProperties[index];
                    targetProp.SetValue(destination, sourceValue);
                }
            }

            return destination;
        }
    }
}
