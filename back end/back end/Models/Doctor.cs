using System.ComponentModel.DataAnnotations;

namespace back_end.Models
{
    public class Doctor
    {
        [Key]
        public int ID { get; set; }
        public String Name { get; set; } = null!;
        public int age { get; set; }
        public String gender { get; set; } = null!;

        public String? telephone_no { get; set; }
    }
}
