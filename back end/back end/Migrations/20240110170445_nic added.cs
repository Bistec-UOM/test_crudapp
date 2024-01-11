using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace back_end.Migrations
{
    /// <inheritdoc />
    public partial class nicadded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "nic",
                table: "appointments",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "appointments",
                keyColumn: "Id",
                keyValue: 1,
                column: "nic",
                value: "2100143433");

            migrationBuilder.UpdateData(
                table: "appointments",
                keyColumn: "Id",
                keyValue: 2,
                column: "nic",
                value: "987655242");

            migrationBuilder.UpdateData(
                table: "appointments",
                keyColumn: "Id",
                keyValue: 3,
                column: "nic",
                value: "99671234");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "nic",
                table: "appointments");
        }
    }
}
