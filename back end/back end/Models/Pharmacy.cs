namespace back_end.Models
{
    public class Pharmacy
    {
        public int Id { get; set; }
        public String Medicine_Name { get; set; } = null!;
        public int Weight { get; set; }
        public int Price { get; set; }
        public String? Company_name { get; set; }
    }
}
