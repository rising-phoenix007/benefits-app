public class Employee {
    public string name { get; set; }
    public int salary { get; set; }
    public int deductions { get; set; }
    public IEnumerable<Dependent> dependents { get; set; }
}