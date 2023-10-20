using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Redesign_disbudpar.Pages
{
    public class WisataModel : PageModel
    {
        public void OnGet()
        {
        }

        public static string chosenMap;
        public async Task<IActionResult> OnPostWisata(object sender)
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }


            return RedirectToPage("./PetaWisata", new { mapID = chosenMap });
        }
    }
}
