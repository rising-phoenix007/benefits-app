var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

app.MapPost("/v1/employee", async (Employee employee) => {
    // call persistence to create employee
});

app.MapGet($"/v1/employee/{name}", async(string name) => {
    // call persistence to retrieve employee information
});

app.MapGet($"/v1/employees", async() => {
    // call persistence to get all employees
});

app.MapPut($"/v1/employee/{name}", async(string name, Employee employee) => {
    // call persistence to update employee information
});

app.MapDelete("/v1/employee", async() => {
    // call persistence to delete employee information
});

app.MapGet("/", () => "Hello World!");

app.Run();
